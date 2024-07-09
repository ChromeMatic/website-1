
export const Navbar_Animation:Anime={
    initial:{
        y: 0,
        x: -50,
        opacity:0
    },
    enter:{
        y:0,
        x:0,
        opacity:1,
        transition:{
            delay:175,
            type:'spring',
            stiffness: 75
        }
    },
    leave:undefined
}

export const Navbar_Animation2={
    initial:{
        y:-50,
        opacity:0
    },
    enter:{
        y:0,
        opacity:1,
        transition:{
            delay:375,
            type:'spring',
            stiffness: 50
        }
    }
}

export const Card_Animation = ( _x:number, _delay:number) => {
   let motion:Anime = {
     initial:{
        x: _x,
        y:undefined,
        opacity:0
     },
     enter:{
        x: 0,
        y: 0,
        opacity: 1,
        transition:{
            delay:_delay,
            type:'spring',
            stiffness: 75
        }
     }, 
     leave:undefined
   }

   return motion
}

export const StagerEffect = (_x:number | undefined,y:number | undefined, _delay:number) =>{
    
    let motion:Anime = {
        initial:{
            x:_x,
            y:y,
            opacity:0
        },
        enter:{
            x: 0,
            y:0,
            opacity:1,
            transition:{
                delay:_delay + 200,
                type:'spring',
                stiffness: 75
            }
        },
        leave:undefined
    }

    return motion
}

export const glowText = {
    initial:{
        'text-shadow':'0 0 1px #fff'
    },
    enter:{
       'text-shadow':'4px 4px 12px #fff',
        transition:{
            duration:5500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const slight_move_1 = {
    initial: {
        y:0
    },
    enter:{
        y:-2,
        transition:{
            duration:2500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const slight_move_2 = {
    initial: {
        y:0
    },
    enter:{
        y:2,
        transition:{
            duration:2500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}

export const dropdown={
    initial:{
        opacity: 0,
        y: -25,
    },
    enter:{
        opacity: 1,
        y: 0,
        transition:{
            delay:275,
            type:'spring',
            stiffness: 75
        }
    },
    leave:{
        y:-25,
        opacity:0,
        transition:{
            delay:175,
            type:'spring',
            stiffness: 75
        }
    }
}

export const _StagerEffect = (delay:number, _x:number, _y:number) =>{

    let motion = {
        initial:{
            x: _x,
            y: _y,
            opacity: 0,
        },
        visible:{
            x: 0,
            y: 0,
           opacity: 1, 
           transition:{
                duration: delay,
                type: 'Spring',
                stiffness: 75,
                ease:"easeInOut",
           }
        }
    }

    return motion
}

export const card_movement_1 = {
    initial:{
        x:-3
    },
    enter:{
        x:0,
        transition:{
            duration:1050,
            repeat: Infinity,
            ease:"easeInOut",
            repeatType: 'reverse',
        }
    }
}

export const card_movement_2 = {
    initial:{
        x:3
    },
    enter:{
        x:0,
        transition:{
            duration:1050,
            repeat: Infinity,
            ease:"easeInOut",
            repeatType: 'reverse',
        }
    }
}

export const _StagerEffect_static = (delay:number, _x:number, _y:number) =>{

    let motion = {
        initial:{
            x: _x,
            y: _y,
            opacity: 0,
        },
        enter:{
            x: 0,
            y: 0,
           opacity: 1, 
           transition:{
                duration: delay,
                type: 'Spring',
                stiffness: 75,
                ease:"easeInOut",
           }
        }
    }

    return motion
}