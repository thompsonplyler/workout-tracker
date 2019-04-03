const day1  = {
    pillarPrep: {
        hasWorkout: true,
        name: "Pillar Prep",
        foamRollGlute:{
            name: "Foam Roll - Glutes",
            type: "duration",
            bi: true,
            sets: 1,
            reps: 30
        },
        foamRollIt:{
            name: "Foam Roll - IT Band",
            type: "duration",
            bi: true,
            sets: 1,
            reps: 30
        },
        foamRollQuad:{
            name: "Foam Roll - Quadriceps",
            type: "duration",
            bi: true,
            sets: 1,
            reps: 30
        },
        foamRollLat:{
            name: "Foam Roll - Lattisimus Dorsi",
            type: "duration",
            bi: true,
            sets: 1,
            reps: 30
        },
        triggerPointArchPlant:{
            name: "Trigger Point - Arch Plantar Fascia",
            type: "reps",
            bi: true,
            sets: 1,
            reps: 50
        }
    },
    movementPrep: {
        hasWorkout: true,
        name: "Movement Prep",
        invertedHamstring:{
            name: "Inverted Hamstring Stretch",
            type: "reps",
            bi: true,
            sets: 1,
            reps: 5
        },
        kneeHug:{
            name: "Knee Hug",
            type: "reps",
            bi: true,
            sets: 1,
            reps: 5
        },
        reverseLungeForeArmInstepRotation:{
            name: "Reverse Lunge - Forearm to Instep with Rotation",
            type: "reps",
            bi: true,
            sets: 1,
            reps: 5
        },
        lateralLunge:{
            name: "Lateral Lunge",
            type: "reps",
            bi: true,
            sets: 1,
            reps: 5
        },
        pillarMarchLinear:{
            name: "Pillar March - Linear",
            type: "reps",
            bi: true,
            sets: 2,
            reps: 10
        },
        pillarSkipLinear:{
            name: "Pillar Skip - Linear",
            type: "reps",
            bi: true,
            sets: 3,
            reps: 10
        }
    },
    medicineBall:{
        name: "Medicine Ball",
        hasWorkout: false 
    },
    plyometrics: {
        hasWorkout: true,
        name: "Plyometrics",
        dropSquat2Foot1Foot:{
            name: "Drop Squat - 2 Foot to 1 Foot",
            type: "reps",
            bi: true,
            sets: 2,
            reps: 6
        },
        linearHurdleHopCounterMovement:{
            name: "Linear Hurdle Hop - Countermovement",
            type: "reps",
            bi: true,
            sets: 2,
            reps: 6
        },
        lateralBoundStabilizeMiniBand:{
            name: "Lateral Bound - Stabilize (Miniband)",
            type: "reps",
            bi: true,
            sets: 3,
            reps: 6
        }
    },
    relativePower:{
        name: "Relative Power",
        hasWorkout: true,
        set1:{
            overheadRotationalSquat:{
                name: "Overhead Rotational Squat - 1 Arm Kettlebell",
                type: "reps",
                bi: true,
                sets: 2,
                reps: 9
            },
            deepSquatHamstringStretch:{
                name: "Deep Squat to Hamstring Stretch",
                type: "reps",
                bi: false,
                sets: 2,
                reps: 6
            },
            lateralPillarBridgeRow:{
                name: "Lateral Pillar Bridge to Row w/ Hip Flexion",
                type: "reps",
                bi: true,
                sets: 2,
                reps: 6
            }
        },
        set2:{
            benchPressAltDbLegLowering:{
                name: "Alternating Dumbbell Bench Press w/ Leg Lowering",
                type: "reps",
                bi: true,
                sets: 3,
                reps: 8
            },
            slidingOverHeadPress:{
                name: "Sliding Overhead Press",
                type: "reps",
                bi: false,
                sets: 3,
                reps: 6
            },
            rdlToRow1Arm1Leg:{
                name: "Romanian Deadlift to Row- 1-Arm, 1-Leg (Cable)",
                type: "reps",
                bi: true,
                sets: 3,
                reps: 8
            },
            invHamstringRotation:{
                name: "Inverted Hamstring Stretch w/ Rotation",
                type: "reps",
                bi: true,
                sets: 3,
                reps: 6
            }},
            set3:{
            pullup3PointIsometric:{
                name: "Pullup - 3 Point Isometric Holds",
                type: "duration",
                bi: false,
                sets: 3,
                reps: 10
            },
            triggerPointThoracicSpine:{
                name: "Trigger Point - Thoracic Spine",
                type: "reps",
                bi: true,
                sets: 3,
                reps: 5
            },
            splitSquat1Arm:{
                name: "Split Squat - 1 Arm Dumbbell",
                type: "reps",
                bi: true,
                sets: 3,
                reps: 8
            },
            quadHipFlexorHalfKneeling:{
                name: "Quad Hip Flexor Stretch - Half Kneeling",
                type: "reps",
                bi: true,
                sets: 3,
                reps: 6
            }

        },
        set4:{
            stabilityChopHalfKneeling:{
                name: "Stability Chop, Half-Kneeling (Cable)",
                type: "reps",
                bi: true,
                sets: 2,
                reps: 8
            },
            dynamicPillarBridgeTrx:{
                name: "Dynamic Pillar Bridge on TRX",
                type: "reps",
                bi: true,
                sets: 2,
                reps: 10
            },
            shoulderPressLateralFlexion:{
                name: "Shoulder Press w/ Lateral Flexion (Kettlebell)",
                type: "reps",
                bi: true,
                sets: 2,
                reps: 8
            }
        }
    },
    esd:{
        name: "ESD (Energy System Development)",
        hasWorkout: true,
        machineEsd:{
            name: "Machine ESD",
            sets: 1,
            workout: {
            hard:{
                type: "duration",
                reps: 30
                },
            moderate:{
                type: "duration",
                reps: 270
                }
            }
        }
    }
}

export default day1

