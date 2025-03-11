import { Cliente, Telefone, Endereco, Empresa } from 'criacao-dados'

const enderecoEmpresa = new Endereco('Av. Paulista', 1000, 'São Paulo', 'SP')
const empresa = new Empresa(
  'Tech Solutions',
  'TechSol',
  '12345678000199',
  enderecoEmpresa
)

const telefone1 = new Telefone(11, '987654321')
const telefone2 = new Telefone(11, '912345678')
empresa.adicionarTelefone(telefone1)
empresa.adicionarTelefone(telefone2)

const clientes = [
  new Cliente(
    '123.456.789-00',
    'João Silva',
    new Endereco('Rua A', 50, 'São Paulo', 'SP')
  ),
  new Cliente(
    '234.567.890-11',
    'Maria Oliveira',
    new Endereco('Rua B', 120, 'Rio de Janeiro', 'RJ')
  ),
  new Cliente(
    '345.678.901-22',
    'Carlos Santos',
    new Endereco('Rua C', 200, 'Belo Horizonte', 'MG')
  ),
  new Cliente(
    '456.789.012-33',
    'Ana Souza',
    new Endereco('Rua D', 80, 'Curitiba', 'PR')
  ),
  new Cliente(
    '567.890.123-44',
    'Pedro Mendes',
    new Endereco('Rua E', 300, 'Porto Alegre', 'RS')
  ),
]

clientes.forEach((cliente) => {
  cliente.adicionarTelefone(new Telefone(11, '99998888'))
  cliente.adicionarTelefone(new Telefone(11, '98887777'))
  empresa.adicionarCliente(cliente)
})

console.log(empresa.detalhe())
