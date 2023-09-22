"use client";

import style from "./style.module.css";
import Project from "./Project";
import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button";



const Projects = [
    {
        name: " FABRIC™",
        desc: " Design & Development",
        image: "one.jpg",
        color: "#dadada",
    },
    {
        name: " Aanstekelijk",
        desc: "Design & Development",
        image: "two.jpg",
        color: "#d0d0d0",
    },
    {
        name: " Base Create",
        desc: "Design & Development",
        image: "three.jpg",
        color: "#eeeeee",
    },
    {
        name: " AVVR",
        desc: "Design & Development",
        image: "four.jpg",
        color: "#ababab",
    },
];

const index = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    return (
        <div className={style.gallery}>
            <h1>Projects</h1>
            <div className={style.projects}>
                {Projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            project={project}
                            index={index}
                            setModal={setModal}
                        />
                    );
                })}
            </div>
            <Modal modal={modal} projects={Projects} />
            <Button> <p>show more</p></Button>

        </div>
    );
};

export default index;
