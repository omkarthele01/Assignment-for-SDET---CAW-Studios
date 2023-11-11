

describe('Inserting the JSON data in input text box and assert the data from populated table', () => {

  it('Inserting the JSON data in input text box and assert the data from populated table', () => {

    cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')

    cy.contains('Table Data').click()

    cy.fixture('testData.json').then((data) => {

      cy.get('#jsondata').clear().type(JSON.stringify(data), { parseSpecialCharSequences: false })
      cy.get('#refreshtable').click()
      cy.get('#dynamictable').should('exist')

      data.forEach((data, index) => {
        cy.get('#tablehere>table>tr').eq(index + 1).children().each((cell, cellIndex) => {
          const expectedValue = [data.name, data.age.toString(), data.gender]
          cy.wrap(cell).should('contain', expectedValue[cellIndex])
        })

      })

    })

  })

})