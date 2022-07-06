type TagProps={
    tagName:string;
}
export const Tag=(props:TagProps)=>{

    return(
        <div className="flex items-start border-2">
            <p className="flex text-sm p-2 m-1 text-left text-white bg-teal-500 rounded-lg hover:bg-teal-300">{props.tagName}</p>
        </div>
    )
}