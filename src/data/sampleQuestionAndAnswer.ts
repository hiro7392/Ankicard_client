import { question } from "../util/typeDefinition"

export const sampleQuestions:question[]=[
    {
        id:1,
        ownUserId:1,
        QuestionText:
            "sq サンプル問題 TCP/IPプロトコルにおける 3way hand shakeとは?",
        LearningLevel:1,
        AnswerText:
            "TCPはコネクション型プロトコル（通信相手の応答があってはじめて通信を開始する）であることから、データ転送を行う前にコネクションの確立を行います。このTCPにおいて使用されるコネクションの確立のことを3ウェイハンドシェイクといいます。以下の手順の通り3回のやりとりによって確立されます",
        TagName:"TCP/IP入門"
    },
    {
        id:2,
        ownUserId:2,
        QuestionText:
            "サンプル問題 DBのACID特性とは？",
        LearningLevel:1,
        AnswerText:
            "ACID特性とは、トランザクション処理において必要とされる4つの要素、Atomicity（原子性）、Consistency（一貫性）、Isolation（独立性）、Durability（永続性）を頭字語で表したものである",
        TagName:"データベース"
    },
    {
        id:3,
        ownUserId:3,
        QuestionText:
            "外部キー制約とは？",
        LearningLevel:1,
        AnswerText:
            "RDBにおいて、他のテーブルのカラムと対応している場合に、そのカラムに存在しない要素(Idなど)を持つレコードを挿入することができないこと。その逆も存在する",
        TagName:"データベース"
    },
]

export const sampleQuestionsCols:question[][]=[
    [
        {
            id:1,
            ownUserId:1,
            QuestionText:
                "sq サンプル問題 TCP/IPプロトコルにおける 3way hand shakeとは?",
            LearningLevel:1,
            AnswerText:
                "TCPはコネクション型プロトコル（通信相手の応答があってはじめて通信を開始する）であることから、データ転送を行う前にコネクションの確立を行います。このTCPにおいて使用されるコネクションの確立のことを3ウェイハンドシェイクといいます。以下の手順の通り3回のやりとりによって確立されます",
            TagName:"TCP/IP入門"
        },
        {
            id:2,
            ownUserId:2,
            QuestionText:
                "サンプル問題 DBのACID特性とは？",
            LearningLevel:1,
            AnswerText:
                "ACID特性とは、トランザクション処理において必要とされる4つの要素、Atomicity（原子性）、Consistency（一貫性）、Isolation（独立性）、Durability（永続性）を頭字語で表したものである",
            TagName:"データベース"
        },
        {
            id:3,
            ownUserId:3,
            QuestionText:
                "外部キー制約とは？",
            LearningLevel:1,
            AnswerText:
                "RDBにおいて、他のテーブルのカラムと対応している場合に、そのカラムに存在しない要素(Idなど)を持つレコードを挿入することができないこと。その逆も存在する",
            TagName:"データベース"
        }
    ],
    [
        {
            id:4,
            ownUserId:1,
            QuestionText:
                "sq サンプル問題 TCP/IPプロトコルにおける 3way hand shakeとは?",
            LearningLevel:1,
            AnswerText:
                "TCPはコネクション型プロトコル（通信相手の応答があってはじめて通信を開始する）であることから、データ転送を行う前にコネクションの確立を行います。このTCPにおいて使用されるコネクションの確立のことを3ウェイハンドシェイクといいます。以下の手順の通り3回のやりとりによって確立されます",
            TagName:"TCP/IP入門"
        },
            
        {
            id:5,
            ownUserId:2,
            QuestionText:
                "サンプル問題 DBのACID特性とは？",
            LearningLevel:1,
            AnswerText:
                "ACID特性とは、トランザクション処理において必要とされる4つの要素、Atomicity（原子性）、Consistency（一貫性）、Isolation（独立性）、Durability（永続性）を頭字語で表したものである",
            TagName:"データベース"
        },
            
        {
            id:6,
            ownUserId:3,
            QuestionText:
                "外部キー制約とは？",
            LearningLevel:1,
            AnswerText:
                "RDBにおいて、他のテーブルのカラムと対応している場合に、そのカラムに存在しない要素(Idなど)を持つレコードを挿入することができないこと。その逆も存在する",
            TagName:"データベース"
        }
    ],
]