"use client";

import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import {comments} from "@/libs/comments";

export default function Home() {
  return (
    
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner username={"ณัฐดนัย ติ๊บดอนจันทร์ 660610756"} likeNum={99999999} userImagePath={"profileImages/nepal.jpg"} posttext={"ข้อสอบยากจัง"} />

        const loop

        {/* Comment Example */}
        


        {comments.map((comments,index) => (
          <Comment
            username={comments.username}
            likeNum={comments.likeNum}
            commentText={comments.commentText}
            userImagePath={comments.userImagePath}
            replies={comments.replies}
            key={index}
          />
        ))}

        

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          <img
            src="/profileImages/puppy.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#3A3B3C" }}
          >
            <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
              หมาน้อย
            </span>
            <br />
            <span style={{ color: "#E4E6EB" }}>จริงค้าบบบบบบบบ</span>
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>2 คน</span>
            </div>
          </div>
        </div>

        {/* map-loop render Comment component here */}
      </div>

      {/* Post Owner Example */}
      
    </div>
  );
}
