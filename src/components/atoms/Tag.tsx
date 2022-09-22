type TagProps={
    TagName:string;
}
export const Tag=(props:TagProps)=>{

    return(
        <div className="flex items-start border-none ml-2">
            <p className="flex text-sm p-2 m-1 text-left text-white bg-teal-500 rounded-lg border-none">{props.TagName}</p>
        </div>
    )
}