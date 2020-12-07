import React, { useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import Article from './components/Article'
import AddArticle from './components/AddArticle'
import { addArticle, removeArticle } from './store/actionCreators'
import { Dispatch } from 'redux'

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <main>
      <h1>My articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          article={article}
          removeArticle={removeArticle}
          key={article.id}
        />
      ))}
    </main>
  )
}

export default App
