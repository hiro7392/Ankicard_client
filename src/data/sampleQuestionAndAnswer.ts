import { question } from "../util/typeDefinition"

export const sampleQuestions:question[]=[
    {
        id:1,
        ownUserId:1,
        QuestionTest:
            "サンプル問題 TCP/IPプロトコルにおける 3way shand shakeとは?",
        AnswerText:
            "CPはコネクション型プロトコル（通信相手の応答があってはじめて通信を開始する）であることから、データ転送を行う前にコネクションの確立を行います。このTCPにおいて使用されるコネクションの確立のことを3ウェイハンドシェイクといいます。以下の手順の通り3回のやりとりによって確立されます",
        tag:"マスタリングTCP/IP入門"
    },
    {
        id:2,
        ownUserId:2,
        QuestionTest:
            "サンプル問題 DBのACID特性とは？4つ答えて",
        AnswerText:
            "ACID特性とは、トランザクション処理において必要とされる4つの要素、Atomicity（原子性）、Consistency（一貫性）、Isolation（独立性）、Durability（永続性）を頭字語で表したものである",
        tag:"データベース"
    },
]