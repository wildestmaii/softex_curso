- conteúdo sobre interfaces
- tá tudo no drive tbm
- passar tudo pro notion
- https://www.notion.so/Padr-es-de-projeto-dbf91f4be30d4180bc3b30b5156d1a2e



# anotações:
      animal.ts
  - Padronização: As interfaces garantem que todas as classes que implementam a interface sigam um padrão específico.
  Isso torna mais fácil para os desenvolvedores entenderem como usar essas classes.

  - Polimorfismo: Com interfaces, você pode tratar objetos de diferentes classes que implementam a mesma interface de maneira uniforme.
  Isso simplifica o código e permite a flexibilidade na manipulação dos objetos.

  - Reutilização: O código das classes que implementam a interface pode ser reutilizado em outros contextos.
  Por exemplo, se você precisar adicionar um novo tipo de animal, basta criar uma nova classe que implementa a interface existente.

  - Documentação: As interfaces servem como documentação clara sobre quais métodos e propriedades uma classe deve implementar, facilitando a colaboração entre desenvolvedores.

  - No geral, o uso de interfaces torna o código mais organizado, flexível e preparado para futuras expansões, especialmente quando há a necessidade
  de representar várias classes que compartilham um conjunto comum de características e comportamentos.


        animal(1).ts
  - Principal uso de uma Interface é definir um contrato entre classes não relacionadas


        animal2.ts
  - Principal uso de uma Interface é definir um contrato entre classes não relacionadas
  - A principal razão de usarmos extends em interface é para sinalizar aos desenvolvedores que os tipos que estamos combinando, estão relacionados de alguma maneira e não repetimos código.


        animal3.ts
  - Sempre que precisarmos substituir uma propriedade de uma interface extendida, temos que utilizar o type Omit seguido da classe que estamos extendendo e do canmpo que queremos fazer o overwrite.
  - 









