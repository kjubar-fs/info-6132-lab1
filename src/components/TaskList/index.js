/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:01:35 PM
 *  Last update: 2 Oct 2024, 12:11:22 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { FlatList, ScrollView } from "react-native";

import Task from "./Task";

export default function TaskList({ tasks }) {
    return (
        <FlatList
            data={tasks}
            renderItem={({ item }) => <Task task={item}/>}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 20 }}
            showsVerticalScrollIndicator={false}
        />
    );
}