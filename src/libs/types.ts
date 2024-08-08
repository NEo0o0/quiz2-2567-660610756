// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    username : string;
    replyText: string;
    likeNum: number;
    userImagePath: string;

}
export type { ReplyProps };
 
/* interface CommentPorps{
    username: string;
    commentText: string;
    likeNum: number;
    userImagePath: string;
    replies: ReplyProps[];
}
export type { CommentPorps }; */