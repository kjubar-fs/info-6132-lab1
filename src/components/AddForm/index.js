/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 2:52:50 PM
 *  Last update: 2 Oct 2024, 3:27:29 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function AddForm({ shown }) {
    return (
        <Modal
            visible={shown}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Add a Task</Text>

                    <View style={styles.field.container}>
                        <Text style={styles.field.label}>Task Name</Text>
                        <TextInput style={styles.field} value="test"></TextInput>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.actions.cancel, styles.actions.button]}
                            activeOpacity={0.5}
                        >
                            <Text style={styles.actions.caption}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.actions.accept, styles.actions.button]}
                            activeOpacity={0.5}
                        >
                            <Text style={styles.actions.caption}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}