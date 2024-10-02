/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:18:16 PM
 *  Last update: 2 Oct 2024, 12:36:43 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { StyleSheet } from "react-native";

import { rootColor, safeAreaPadding } from "../../includes/globalStyles";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,

        padding: 10,
        paddingTop: safeAreaPadding,

        backgroundColor: rootColor,
        borderBottomWidth: 2,
        borderBottomColor: "#000",
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FFF",
    },
});