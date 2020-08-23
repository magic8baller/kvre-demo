import React from "react";
import { AppProvider } from "./src/context";

export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>;
