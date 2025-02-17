import Comment from "./Comment";

const commentsData = [
    {
        name : "Ruthvik Koutika",
        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
        replies : [],
    },
    {
        name : "Ruthvik Koutika",
        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
        replies : [],
    },
    {
        name : "Ruthvik Koutika",
        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
        replies : [
            {
                name : "Ruthvik Koutika",
                text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                replies : [],
            },{
                name : "Ruthvik Koutika",
                text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                replies : [],
            },{
                name : "Ruthvik Koutika",
                text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                replies : [{
                    name : "Ruthvik Koutika",
                    text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                    replies : [{
                        name : "Ruthvik Koutika",
                        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                        replies : [{
                            name : "Ruthvik Koutika",
                            text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                            replies : [{
                                name : "Ruthvik Koutika",
                                text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                                replies : [],
                            },],
                        },],
                    },],
                },],
            },
        ],
    },
    {
        name : "Ruthvik Koutika",
        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
        replies : [{
            name : "Ruthvik Koutika",
            text : "Mutual fund sahi hai, investments are subjejcted to market risk",
            replies : [],
        },],
    },
    {
        name : "Ruthvik Koutika",
        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
        replies : [{
            name : "Ruthvik Koutika",
            text : "Mutual fund sahi hai, investments are subjejcted to market risk",
            replies : [{
                name : "Ruthvik Koutika",
                text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                replies : [{
                    name : "Ruthvik Koutika",
                    text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                    replies : [{
                        name : "Ruthvik Koutika",
                        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
                        replies : [],
                    },],
                },],
            },],
        },],
    },
    {
        name : "Ruthvik Koutika",
        text : "Mutual fund sahi hai, investments are subjejcted to market risk",
        replies : [],
    },
];

const CommentsList = ({comments}) =>{
    return comments.map((comment, index)=>(
        <div key={index}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ))
};


const CommentsContainer = ()=>{
    return (
        <div className="m-5 p-2">
            <h1 className="font-bold text-2xl">Comments :</h1>
            {/* <Comment data={commentsData[0]} /> */}
            <CommentsList comments={commentsData} />
           
        </div>
    )
};
export default CommentsContainer;
