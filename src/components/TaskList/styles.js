/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:05:22 PM
 *  Last update: 2 Oct 2024, 7:06:36 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 15,
        paddingBottom: Platform.OS === "ios" ? 90 : 75,
        gap: 15,
    },

    emptyText: {
        alignSelf: "center",

        fontSize: 18,
    },
});