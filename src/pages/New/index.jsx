import { useState } from 'react'

import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'

import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota')
    }

    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio'
      )
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio'
      )
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert('Nota criada com sucesso')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to={-1}>voltar</Link>
          </header>

          <Input
            value={title}
            placeholder="Título"
            onChange={e => {
              setTitle(e.target.value)
            }}
          />

          <TextArea
            value={description}
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => {
                  handleRemoveLink(link)
                }}
              />
            ))}
            <NoteItem
              value={newLink}
              isNew
              placeholder="Novo link"
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag)
                  }}
                />
              ))}
              <NoteItem
                value={newTag}
                isNew
                placeholder="Novo marcador"
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button onClick={handleNewNote}>Salvar</Button>
        </Form>
      </main>
    </Container>
  )
}
