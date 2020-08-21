import React from 'react'
import { render } from '@testing-library/react'
import BubblePage from './BubblePage'
import axios from 'axios'
import axiosWithAuth from './axiosWithAuth'

jest.mock('react')
jest.mock('axios')

describe('this is crap...', () => {
	test('Gets and renders bubbles', async () => {
		render(<BubblePage />)
		const mockdata = [ {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    }, ]
		axios.create.mockImplementationOnce(() => Promise.resolve(mockdata))
		await expect(axiosWithAuth()).resolves.toEqual(mockdata)
	})
})
