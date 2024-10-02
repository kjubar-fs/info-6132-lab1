/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:01:42 PM
 *  Last update: 2 Oct 2024, 12:08:52 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text } from "react-native";

import styles from "./styles";

export default function Task({ task }) {
    return (
        <View style={styles.container}>
            <Text>Task goes here</Text>
            <Text>{task.title}</Text>
            <Text>{task.status ? "True" : "False"}</Text>
            <Text>{task.id}</Text>
        </View>
    );
}