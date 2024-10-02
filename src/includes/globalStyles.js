/*
 *  Author: Kaleb Jubar
 *  Created: 2 Oct 2024, 12:14:20 PM
 *  Last update: 2 Oct 2024, 12:17:52 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Platform } from "react-native"

export const safeAreaPadding = Platform.OS === "ios" ? 60 : 50;

export const rootColor = "#5296A5";
export const accentColor = "#82DDF0";
export const positiveColor = "#8AC926";
export const negativeColor = "#FF595E";