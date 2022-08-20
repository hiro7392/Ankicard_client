export type question={
    id:number;
    ownUserId:number;
    QuestionText:string;
    AnswerText:string;
    tagName:string;
};

export type tag={
    TagId:number;
    TagName:string;
    CreatedUserId:number;
}