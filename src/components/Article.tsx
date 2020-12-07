import React, { useCallback } from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

type ArticleProps = {
  article: IArticle
  removeArticle: (article: IArticle) => void
}

const Article: React.FC<ArticleProps> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteArticle = useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  )

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  )
}

export default Article
