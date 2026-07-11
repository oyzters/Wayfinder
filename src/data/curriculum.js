// Wayfinder — Mapa curricular Ingeniero en Software 2023 (ITSON)
// Copyright (c) 2026 Manuel Cortez y Sebastián Escalante (Oyzters)
// SPDX-License-Identifier: MIT  ·  Ver archivo LICENSE en la raíz del proyecto.
//
// Fuente: "Mapa IngenieriaSoftware 2023.pdf"
//
// Cada materia pertenece a un BLOQUE (color) y a un SEMESTRE.
// El orden dentro de cada semestre respeta (lo más posible) el mapa original.

/** Bloques del programa con sus colores (paleta tipo ITSON). */
export const BLOCKS = {
  ciencias_basicas:     { label: "Ciencias básicas",           color: "#8a8d90" },
  formacion_general:    { label: "Formación general",          color: "#27a9e1" },
  construccion:         { label: "Construcción",               color: "#2f5c9e" },
  diseno:               { label: "Diseño",                     color: "#f47c20" },
  admin_proyectos:      { label: "Administración de proyectos", color: "#f7c21b" },
  optativa_disciplinar: { label: "Optativa disciplinar",       color: "#1f8a4c" },
  practica_profesional: { label: "Práctica profesional",       color: "#8cc63e" },
  ingles:               { label: "Inglés universitario",       color: "#e23b3b" },
};

/** Estados posibles de una materia (orden = ciclo al hacer clic). */
export const STATUSES = {
  pendiente:  { label: "Pendiente",  icon: "○" },
  planeada:   { label: "Planeada",   icon: "◔" },
  en_curso:   { label: "En curso",   icon: "◐" },
  completada: { label: "Completada", icon: "✓" },
};

export const STATUS_ORDER = ["pendiente", "planeada", "en_curso", "completada"];

const c = (id, name, block, credits, hours) => ({ id, name, block, credits, hours });

/** Materias por semestre (8 columnas), en orden vertical del mapa. */
export const SEMESTERS = [
  // Semestre 1
  [
    c("salud-desarrollo-personal", "Salud y desarrollo personal", "formacion_general", 5.62, "3hc"),
    c("precalculo", "Precálculo", "ciencias_basicas", 9.37, "5hc"),
    c("analisis-informacion-comunicacion", "Análisis de la información y comunicación", "formacion_general", 5.62, "3hc"),
    c("introduccion-ingenieria-software", "Introducción a la ingeniería de software", "formacion_general", 5.62, "3hc"),
    c("programacion-1", "Programación I con Lab", "construccion", 11.25, "3hc 3hl"),
  ],
  // Semestre 2
  [
    c("calculo", "Cálculo", "ciencias_basicas", 9.37, "5hc"),
    c("matematicas-discretas", "Matemáticas discretas", "ciencias_basicas", 9.37, "5hc"),
    c("tecnologia-empresa", "Tecnología y empresa", "admin_proyectos", 5.62, "3hc"),
    c("sistemas-operativos-arquitectura", "Sistemas operativos y arquitectura de computadoras", "construccion", 9.37, "5hc"),
    c("programacion-2", "Programación II c/Lab", "construccion", 11.25, "3hc 3hl"),
  ],
  // Semestre 3
  [
    c("democracia-gestion-ciudadana", "Democracia y gestión ciudadana", "formacion_general", 5.62, "3hc"),
    c("matematicas-computacionales", "Matemáticas computacionales", "ciencias_basicas", 9.37, "5hc"),
    c("algebra-lineal", "Álgebra lineal", "ciencias_basicas", 5.62, "3hc"),
    c("redes", "Redes", "diseno", 5.62, "3hc"),
    c("programacion-3", "Programación III", "construccion", 5.62, "3hc"),
    c("estructura-datos", "Estructura de datos", "construccion", 5.62, "3hc"),
    c("bases-datos", "Bases de datos", "construccion", 5.62, "3hc"),
    c("probabilidad-estadistica", "Probabilidad y estadística", "ciencias_basicas", 5.62, "3hc"),
  ],
  // Semestre 4
  [
    c("optativa-formacion-general-1", "Optativa de formación general I", "formacion_general", 5.62, "3hc"),
    c("seguridad-informatica", "Seguridad informática", "formacion_general", 5.62, "3hc"),
    c("analisis-algoritmos", "Análisis de algoritmos", "ciencias_basicas", 5.62, "3hc"),
    c("modelado-procesos", "Modelado de procesos", "diseno", 5.62, "3hc"),
    c("bases-datos-avanzadas", "Bases de datos avanzadas", "construccion", 5.62, "3hc"),
    c("diseno-software", "Diseño de software", "diseno", 5.62, "3hc"),
    c("administracion-proyectos", "Administración de proyectos", "admin_proyectos", 5.62, "3hc"),
    c("estadistica-inferencial", "Estadística inferencial", "ciencias_basicas", 5.62, "3hc"),
  ],
  // Semestre 5
  [
    c("optativa-formacion-general-2", "Optativa de formación general II", "formacion_general", 5.62, "3hc"),
    c("metodos-numericos-computacionales", "Métodos numéricos computacionales", "ciencias_basicas", 5.62, "3hc"),
    c("diseno-sistemas-interactivos", "Diseño de sistemas interactivos", "diseno", 5.62, "3hc"),
    c("ingenieria-requisitos", "Ingeniería de requisitos", "diseno", 5.62, "3hc"),
    c("arquitectura-software", "Arquitectura de software", "diseno", 5.62, "3hc"),
    c("aplicaciones-web", "Aplicaciones web", "construccion", 5.62, "3hc"),
    c("administracion-proyectos-software", "Administración de proyectos de software", "admin_proyectos", 5.62, "3hc"),
  ],
  // Semestre 6
  [
    c("axiologia-profesion", "Axiología para la profesión", "formacion_general", 5.62, "3hc"),
    c("pruebas-software", "Pruebas de software", "admin_proyectos", 5.62, "3hc"),
    c("innovacion-tecnologica", "Innovación tecnológica", "admin_proyectos", 5.62, "3hc"),
    c("proyecto-software-integrador", "Proyecto de software integrador", "diseno", 5.62, "3hc"),
    c("sistemas-empotrados", "Sistemas empotrados", "construccion", 5.62, "3hc"),
    c("aplicaciones-moviles", "Aplicaciones móviles", "construccion", 5.62, "3hc"),
    c("sistemas-distribuidos", "Sistemas distribuidos", "construccion", 5.62, "3hc"),
  ],
  // Semestre 7
  [
    c("optativa-1", "Optativa I", "optativa_disciplinar", 5.62, "3hc"),
    c("optativa-2", "Optativa II", "optativa_disciplinar", 5.62, "3hc"),
    c("business-strategy-technology", "Business strategy and technology", "admin_proyectos", 5.62, "3hc"),
    c("metodos-agiles-desarrollo", "Métodos ágiles de desarrollo", "admin_proyectos", 9.37, "5hc"),
    c("calidad-software", "Calidad de software", "admin_proyectos", 5.62, "3hc"),
  ],
  // Semestre 8
  [
    c("optativa-3", "Optativa III", "optativa_disciplinar", 5.62, "3hc"),
    c("optativa-4", "Optativa IV", "optativa_disciplinar", 5.62, "3hc"),
    c("seminario-titulacion", "Seminario de titulación", "diseno", 5.62, "3hc"),
    c("practica-profesional", "Práctica profesional", "practica_profesional", 16.86, "9hp"),
    c("evaluacion-software", "Evaluación de software", "admin_proyectos", 5.62, "3hc"),
  ],
];

/** Inglés universitario (una materia por semestre, del 1 al 6). */
export const ENGLISH = [
  c("ingles-introductorio", "Inglés introductorio", "ingles", 5.62, "3hp"),
  c("ingles-a1", "Inglés universitario A1", "ingles", 9.37, "5hp"),
  c("ingles-a2", "Inglés universitario A2", "ingles", 9.37, "5hp"),
  c("ingles-b1-1", "Inglés universitario B1 I", "ingles", 9.37, "5hp"),
  c("ingles-b1-2", "Inglés universitario B1 II", "ingles", 9.37, "5hp"),
  c("ingles-b1-3", "Inglés universitario B1 III", "ingles", 9.37, "5hp"),
];

/** Extracurriculares (sin créditos, pero se pueden marcar). */
export const EXTRACURRICULARES = [
  c("tutoria-1", "Tutoría I", "formacion_general", 0, "Extracurricular"),
  c("tutoria-2", "Tutoría II", "formacion_general", 0, "Extracurricular"),
];

/** Todas las materias en una lista plana. */
export const ALL_COURSES = [
  ...SEMESTERS.flat(),
  ...ENGLISH,
  ...EXTRACURRICULARES,
];

/**
 * Seriación / orden bloqueante (prerrequisitos).
 * PREREQS[materiaId] = [idPrerrequisito, ...]  → "para cursar X necesitas antes…"
 * Transcrito de las flechas del mapa curricular oficial (mapa_curricular_isw.pdf).
 * Las materias sin entrada aquí no tienen prerrequisito.
 */
export const PREREQS = {
  // Ciencias básicas / matemáticas
  "calculo": ["precalculo"],
  "algebra-lineal": ["precalculo"],
  "matematicas-computacionales": ["matematicas-discretas"],
  "metodos-numericos-computacionales": ["algebra-lineal"],
  "analisis-algoritmos": ["estructura-datos"],
  "estadistica-inferencial": ["probabilidad-estadistica"],

  // Formación general / admin
  "tecnologia-empresa": ["introduccion-ingenieria-software"],
  "seguridad-informatica": ["redes"],
  "administracion-proyectos-software": ["administracion-proyectos"],
  "calidad-software": ["administracion-proyectos-software"],
  "business-strategy-technology": ["innovacion-tecnologica"],
  "metodos-agiles-desarrollo": [
    "innovacion-tecnologica",
    "administracion-proyectos-software",
  ],
  "evaluacion-software": ["calidad-software"],

  // Construcción
  "sistemas-operativos-arquitectura": ["programacion-1"],
  "programacion-2": ["programacion-1"],
  "programacion-3": ["programacion-2"],
  "estructura-datos": ["matematicas-discretas", "programacion-2"],
  "bases-datos": ["programacion-1"],
  "bases-datos-avanzadas": ["bases-datos", "programacion-3"],
  "redes": ["sistemas-operativos-arquitectura"],
  "aplicaciones-web": [
    "programacion-3",
    "bases-datos-avanzadas",
    "diseno-software",
  ],
  "aplicaciones-moviles": ["aplicaciones-web"],
  "sistemas-distribuidos": ["aplicaciones-web"],

  // Diseño
  "modelado-procesos": ["tecnologia-empresa"],
  "diseno-software": ["programacion-3"],
  "diseno-sistemas-interactivos": ["modelado-procesos"],
  "arquitectura-software": ["redes", "programacion-3", "diseno-software"],
  "ingenieria-requisitos": ["modelado-procesos"],
  "proyecto-software-integrador": [
    "ingenieria-requisitos",
    "arquitectura-software",
    "aplicaciones-web",
  ],
  "pruebas-software": ["ingenieria-requisitos"],
  "seminario-titulacion": ["proyecto-software-integrador"],

  // Práctica profesional
  "practica-profesional": ["proyecto-software-integrador"],

  // Inglés universitario (cadena secuencial)
  "ingles-a1": ["ingles-introductorio"],
  "ingles-a2": ["ingles-a1"],
  "ingles-b1-1": ["ingles-a2"],
  "ingles-b1-2": ["ingles-b1-1"],
  "ingles-b1-3": ["ingles-b1-2"],
};

/** Aristas dirigidas [origen, destino] derivadas de PREREQS. */
export const PREREQ_EDGES = Object.entries(PREREQS).flatMap(([to, list]) =>
  (list || []).map((from) => [from, to])
);

/** UNLOCKS[materiaId] = [idQueSeHabilita, ...]  → "al aprobar X puedes cursar…" */
export const UNLOCKS = PREREQ_EDGES.reduce((acc, [from, to]) => {
  (acc[from] ||= []).push(to);
  return acc;
}, {});
