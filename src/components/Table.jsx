import React from 'react'

function Table() {
  return (
    <table className="text-secondaryColors-500 max-w-full">
      <tr className="bg-complementaryColors-500">
        <th>Biomas</th>
        <th>2019</th>
        <th>2020</th>
        <th>% de variação 2019-2020</th>
      </tr>
      <tr className="bg-white">
        <td>Pampa</td>
        <td>1,3</td>
        <td>6,0</td>
        <td>+349%</td>
      </tr>
      <tr className="bg-complementaryColors-400">
        <td>Pantanal</td>
        <td >12,9</td>
        <td >32,9</td>
        <td className="font-bold text-complementaryColors-600">+154%</td>
      </tr>
      <tr className="bg-white">
        <td>Amazônia</td>
        <td>59,8</td>
        <td>62,3</td>
        <td>+4%</td>
      </tr>
      <tr className="bg-primaryColors-200">
        <td >Mata Atlântica</td>
        <td >15</td>
        <td >15,1</td>
        <td >0%</td>
      </tr>
      <tr className="bg-white">
        <td >Cerrado</td>
        <td >122,7</td>
        <td >102,4</td>
        <td >-17%</td>
      </tr>
      <tr className="bg-primaryColors-200">
        <td>Caatinga</td>
        <td>12,4</td>
        <td>17,8</td>
        <td>-38%</td>
      </tr>
    </table>
  )
}

export default Table