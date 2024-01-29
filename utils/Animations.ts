
export const Navbar_Animation:Anime={
    initial:{
        y: -100,
        x: undefined,
        opacity:0
    },
    enter:{
        y:0,
        x:undefined,
        opacity:1,
        transition:{
            delay:25,
            type:'spring',
            stiffness:75
        }
    },
    leave:undefined
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