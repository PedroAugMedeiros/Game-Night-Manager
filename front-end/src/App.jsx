import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import CardGame from "./components/Card/index";
import Editor from "./components/Editor/index";
import { formatDate } from './helper/getDateAndHour';
import Pagination from './components/Pagination/index';
import Button from 'react-bootstrap/Button';

export default function App() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  const [body, setBody] = useState('');
  const [buttonAddGame, setButtonAddGame] = useState(true);
  const [numberPage, setNumberPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const [order, setOrder] = useState('')

  const getGames = () => {
    Axios.get("http://localhost:5000/getCards").then((response) => {
      setListCard(response.data);
    });
  }

  const handleRegisterGame = () => {
    Axios.post("http://localhost:5000/register", {
      id: listCard.id,
      title: values.title,
      body: body,
      dateCreation: formatDate(),
      historyAtualization: [],
    }).then((response) => {
      setListCard([
        ...listCard,
        {
          id: response.data.id,
          title: values.title,
          body: body,
          dateCreation: formatDate(),
          historyAtualization: [],
        },
      ]);
    });

    setButtonAddGame(true)
  };

  const deleteAll = () => {
    Axios.delete(`http://localhost:5000/deleteAll`).then(() => {
      setListCard([]);
    });
  };

  useEffect(() => {
    getGames();
  }, [numberPage, searchInput]);

  const handleaddvalues = (values) => {
    setValues((prevvalues) => ({
      ...prevvalues,
      [values.target.title]: values.target.value,
    }));
  };

  const handleChangeInput = (valueInput) => {
    setSearchInput(valueInput)
  }

  const showPage = () => {
    if (searchInput !== '') {
      if (order === 'title') {
        if (numberPage === 1) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index < 5) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 2) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 5 && index < 10) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 3) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 10 && index < 15) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
        if (numberPage === 4) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 15 && index < 20) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 5) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 20 && index < 26) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
      }

      if (order === 'dateCreate') {
        if (numberPage === 1) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index < 5) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 2) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 5 && index < 10) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 3) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 10 && index < 15) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
        if (numberPage === 4) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 15 && index < 20) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 5) {
          return listCard.filter((item) => item.title.includes(searchInput)).sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 20 && index < 26) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
      }

      if (numberPage === 1) {
        return listCard.filter((item) => item.title.includes(searchInput)).map((item, index) => {
          if (index < 5) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
      if (numberPage === 2) {
        return listCard.filter((item) => item.title.includes(searchInput)).map((item, index) => {
          if (index >= 5 && index < 10) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }

      if (numberPage === 3) {
        return listCard.filter((item) => item.title.includes(searchInput)).map((item, index) => {
          if (index >= 10 && index < 15) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
      if (numberPage === 4) {
        return listCard.filter((item) => item.title.includes(searchInput)).map((item, index) => {
          if (index >= 15 && index < 20) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }

      if (numberPage === 5) {
        return listCard.filter((item) => item.title.includes(searchInput)).map((item, index) => {
          if (index >= 20 && index < 26) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
    }
    if (searchInput === '') {
      if (order === 'title') {
        if (numberPage === 1) {
          return listCard.sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index < 5) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 2) {
          return listCard.sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 5 && index < 10) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 3) {
          return listCard.sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 10 && index < 15) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
        if (numberPage === 4) {
          return listCard.sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 15 && index < 20) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 5) {
          return listCard.sort((a, b) => (a.title < b.title) ? -1 : 1).map((item, index) => {
            if (index >= 20 && index < 26) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
      }
      if (order === 'dateCreate') {
        if (numberPage === 1) {
          return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index < 5) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 2) {
          return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 5 && index < 10) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 3) {
          return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 10 && index < 15) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
        if (numberPage === 4) {
          return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 15 && index < 20) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }

        if (numberPage === 5) {
          return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
            if (index >= 20 && index < 26) {
              return <CardGame getGames={getGames}
                edited={item.edited}
                listCard={listCard}
                setListCard={setListCard}
                id={item.id}
                key={item.id}
                title={item.title}
                body={item.body}
                dateCreation={item.dateCreation}
                dateAtualization={item.dateAtualization}
                historyAtualization={item.historyAtualization} />
            }
          }
          )
        }
      }
      if (numberPage === 1) {
        return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
          if (index < 5) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
      if (numberPage === 2) {
        return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
          if (index >= 5 && index < 10) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }

      if (numberPage === 3) {
        return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
          if (index >= 10 && index < 15) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
      if (numberPage === 4) {
        return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
          if (index >= 15 && index < 20) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
      if (numberPage === 5) {
        return listCard.sort((a, b) => (a.dateCreation.date < b.dateCreation.date) ? -1 : 1).sort((a, b) => (a.dateCreation.hour < b.dateCreation.hour) ? -1 : 1).map((item, index) => {
          if (index >= 20 && index < 26) {
            return <CardGame getGames={getGames}
              edited={item.edited}
              listCard={listCard}
              setListCard={setListCard}
              id={item.id}
              key={item.id}
              title={item.title}
              body={item.body}
              dateCreation={item.dateCreation}
              dateAtualization={item.dateAtualization}
              historyAtualization={item.historyAtualization} />
          }
        }
        )
      }
    }

    return listCard.map((item, index) => {
      if (index < 6) {
        return <CardGame getGames={getGames}
          edited={item.edited}
          listCard={listCard}
          setListCard={setListCard}
          id={item.id}
          key={item.id}
          title={item.title}
          body={item.body}
          dateCreation={item.dateCreation}
          dateAtualization={item.dateAtualization}
          historyAtualization={item.historyAtualization} />
      }
    }
    )
  }

  return (
    <div className='app-container'>
      <div className="register-container">
        <div className="register-title">
          <h1 className='title'>Game Night Manager</h1>
        </div>
        <div className="content-manager">
          <form className="register-inputs">
            <input
              required
              type="text"
              title="title"
              placeholder="Nome"
              className="register-input"
              onChange={handleaddvalues}
            />
            <button disabled={buttonAddGame} onClick={handleRegisterGame} className="register-button">
              Adicionar Game
            </button>
          </form>
          <Editor
            setButtonAddGame={setButtonAddGame}
            className="Editor"
            setBody={setBody}
          />
        </div>
      </div>
      <section className="card-container">
        <div className="card-container-title">
          <h1 className='title-card-container'>Games Adicionados</h1>
        </div>
        <div className='search-area'>
          <div className='buttons-card'>
            <Button
              style={{
                width: '90%',
                margin: '2%',
                padding: '1%',
                color: 'black',
                fontWeight: '700',
              }} variant="danger" onClick={deleteAll}> Excluir Todos</Button>
            <Button
              style={{
                width: '90%',
                margin: '2%',
                padding: '1%',
                color: 'black',
                fontWeight: '700',
              }} variant="warning" onClick={() => { setOrder('title') }}> Ordenar por Titulo</Button>
            <Button
              style={{
                width: '90%',
                margin: '2%',
                padding: '1%',
                color: 'black',
                fontWeight: '700',
              }} variant="warning" onClick={() => { setOrder('dateCreate') }}>Ordenar por Data De Criação</Button>
            <Button
              style={{
                width: '90%',
                margin: '2%',
                padding: '1%',
                color: 'black',
                fontWeight: '700',
              }} variant="danger" onClick={() => { setOrder('') }}>Remover Ordenação</Button>
          </div>
          <input
            className='search-input'
            value={searchInput} placeholder='Pesquise Aqui!' onChange={({ target }) => handleChangeInput(target.value)}>
          </input>
        </div>
        <div className='cards'>
          {listCard.length === 0 ? <div><h1 className='alert-h1'>Não há Games Adicionados!</h1>
          </div> : showPage()}
        </div>
        <Pagination
          className='pagination'
          total={listCard.length}
          setNumberPage={setNumberPage} />
      </section>
    </div>
  );
}
