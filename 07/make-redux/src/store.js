const appState = {
    title: {
      text: 'React.js 小书',
      color: 'red'
    },
    content: {
      text: 'React.js 小书内容',
      color: 'red'
    }
  }

  function stateChange (state ,action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
        state.title.text = action.text
        break
      case 'UPDATE_TITLE_COLOR':
        state.title.color = action.color
        break
      default: 
        break
    }
  }
  

  function createStore (state, stateChange) {
      const getState = () => state
      const dispatch = (action) => stateChange(state, action)
      return {getState, dispatch}
  }

  const store = createStore(appState, stateChange)