export let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },
  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default'
  },
  menu: {
    border: 'solid 1px #ccc',
    borderRadius: '5px',
  }
}

export function matchStateToTerm (state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.abbr.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

export function fakeRequest (value, callback) {
  if (value === '') {
    var items = getUsers()
  } else {
    var items = getUsers().filter((state) => {
      return matchStateToTerm(state, value)
    });
  }

  callback(items);
}

export function getUsers() {
  return [
    { 
      abbr: "Lucho",
      name: "Luciano Di Pasquale"
    },
    { 
      abbr: "Benja",
      name: "Benjamin Perez Baldoni"
    },
    { 
      abbr: "Santi",
      name: "Santiago Hernandez"
    },
    { 
      abbr: "Pato",
      name: "Patricio Rocca Huget"
    },
  ]
}