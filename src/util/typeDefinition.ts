export type question={
    id:number;
    ownUserId:number;
    QuestionText:string;
    LearningLevel:number;
    AnswerText:string;
    TagName:string;
};

export type tag={
    TagId:number;
    TagName:string;
    CreatedUserId:number;
}