import React, { useState } from 'react'

type AddArticleProps = {
  saveArticle: (article: IArticle | any) => void
}

const AddArticle: React.FC<AddArticleProps> = ({ saveArticle }) => {
  const [article, setArticle] = useState<IArticle | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input type="text" id="title" placeholder="Title" onChange={handleArticleData} />
      <input type="text" id="body" placeholder="Description" onChange={handleArticleData} />
      <button disabled={Boolean(article === undefined)}>Add article</button>
    </form>
  )
}

export default AddArticle
