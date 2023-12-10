import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SideBgComponent({ onSearch, setSearchQuery}){
    function handleSubmit(e) {
        e.preventDefault()
        try {
          onSearch()
        } catch (err) {
          alert('도시명을 확인해주세요')
        }
      }
    return (
        <div style={{width: '50%', marginLeft:'auto', position:'flex',top: 0, backgroundColor:'#F6F8F9', display: 'flex'}}>
             <Form className='d-flex' onSubmit={handleSubmit} style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', width:'50%', margin: 'auto'}}>
              <Form.Control
                type='search'
                placeholder='Search Location...'
                className='me-2'
                aria-label='Search'
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant='outline-success' onClick={onSearch}>
                Search
              </Button>
            </Form>
        </div>
    )
}    