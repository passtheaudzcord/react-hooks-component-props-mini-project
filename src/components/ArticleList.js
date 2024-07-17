import React from "react";

function ArticleList({posts}) {
    const articleArray = posts?.map((post) => {
        return (
            <main>
                key={post.id}
                title={post.title}
                date={post.date}
                preview={post.preview}
                minutes={post.minutes}
        
            </main> 
            return {articleArray}
        )}
    )}

export default ArticleList;