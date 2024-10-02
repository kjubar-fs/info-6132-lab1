/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:01:42 PM
 *  Last update: 2 Oct 2024, 1:42:03 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, Switch } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { accentColor, negativeColor } from "../../../includes/globalStyles";
import styles from "./styles";

export default function Task({ task }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <View style={styles.controlsContainer}>
                <View style={styles.switch.container}>
                    <Text style={styles.switch.text}>{task.status ? "Done" : "Due"}</Text>
                    <Switch
                        style={styles.switch}
                        value={task.status}
                        trackColor={{ false: "#DDD", true: accentColor }}
                        ios_backgroundColor="#DDD"
                        thumbColor="#FFF"
                    />
                </View>

                <MaterialIcons.Button
                    name="delete-forever"
                    size={21}
                    color="#FFF"
                    backgroundColor={negativeColor}
                    style={styles.delete.button}
                    onPress={() => {}}
                >
                    <Text style={styles.delete.caption}>Delete</Text>
                </MaterialIcons.Button>
            </View>
            <Text style={styles.detail}>{task.id}</Text>
        </View>
    );
}