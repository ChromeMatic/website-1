
export interface Anime{
    initial:{
        x: number | undefined,
        y: number | undefined,
        opacity: number | undefined 
    },
    enter:{
        x: number | undefined,
        y: number | undefined,
        opacity: number | undefined 
        transition:{ 
            delay: number,
            type: string,
            stiffness: number,
        }
    },
    leave:{
        x: number | undefined,
        y: number | undefined,
        opacity: number | undefined 
        transition:{ 
            delay: number,
            type: string,
            stiffness: number,
        }
    } | undefined
}

