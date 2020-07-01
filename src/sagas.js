import { setImage, LOAD_IMAGE } from "./store/images"
import { takeEvery, call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from "./store/isLoading"
import { fetchData } from "./api"

function* workerLoadData() {

  try {
    yield put(startLoading())
    const image = yield call(fetchData)
    yield put(setImage([...image].map((item, index) => {
      return {
        ...item,
        id: (Date.now() + index).toString(),
        favorite: true,
      }
    }))),
      yield put(finishLoading())

  } catch (error) {

  }

}

export function* watchLoadData() {
  yield takeEvery(LOAD_IMAGE, workerLoadData)
}