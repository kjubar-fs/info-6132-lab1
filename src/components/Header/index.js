/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:15:33 PM
 *  Last update: 2 Oct 2024, 12:28:02 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Text, View } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "./styles";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Much To-do About Nothing</Text>
            <MaterialCommunityIcons name="calendar-clock" size={24} color="#FFF" />
        </View>
    );
}