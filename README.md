# Redux-persist-typescript

## О чем репозиторий
Репозиторий, для изучения redux-persist

## Используемые материалы
- [Документация redux-persist](https://github.com/rt2zz/redux-persist)
- [How to use redux in yout react typescript app](https://www.freecodecamp.org/news/how-to-use-redux-in-your-react-typescript-app/)

## Документация

### Быстрый старт
Примеры использования:
1. Основы redux-persist (Basic usages)
2. Вложенное Вложенный persist
3. Hot module replacement
4. Разделение кода (Code splitting)

#### Основы redux-persist (Basic usages)
Базовое использование предполагает, что вы добавите `persistReducer` и `persistStore`
в свои настройки. **ВАЖНО** Каждому приложению необходимо решить как много уровней
состояния они хотят мержить. По умолчанию - 1 уровень.
<br>
Пожалуйста, прочитайте про [state reconsiler](#) для подробной информации
<br>
```javascript
// configureStore.js

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```