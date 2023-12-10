import Comment from "./Comment";

const commentData = [
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                ],
            },
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                        ],
                    },
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                        ],
                    },
                ],
            },
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                ],
            },
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                        ],
                    },
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                        ],
                    },
                ],
                
            },
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                ],
            },
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                            {
                                name: "Praneeth",
                                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                                replies:[
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
        ],
    },
    {
        name: "Praneeth",
        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
        replies:[
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                    {
                        name: "Praneeth",
                        text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                        replies:[
                        ],
                    },
                ],
                
            },
            {
                name: "Praneeth",
                text: "Listen to this spicy treat Dum Masala song from Mahesh babu's Guntur Kaaram Movie ",
                replies:[
                ],
            },
        ],
    },
];

const CommentsList = ({comments}) => {

    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment}/>

            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies}/>
            </div>
        </div>


    ))
};

const CommentsContainer = () => {
    return(
        <div>
            <h1 className="font-bold p-2 text-lg">Comments</h1>
            <div>
                    <CommentsList  comments={commentData}/>
            </div>
        </div>
    );
};

export default CommentsContainer;