import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
export const MainView = () => {
    return (
        <div>
            <div>Eloquent JavaScript</div>
            <div>Mastering JavaScript Functional Programming</div>
            <div>JavaScript: The Good Practice</div>
            <div>JavaScript: The Definitive Guide</div>
            <div>The Road to React</div>
        </div>
    );
};