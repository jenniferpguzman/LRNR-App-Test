import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home Component', () => {
    it('renders the heading', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        expect(
            screen.getByText("Your guided path to programming enlightenment")
        ).toBeInTheDocument();
    })
    it('renders the Begin Journey button', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByRole('button', { name: 'Begin Journey'})).toBeInTheDocument();
    })
    it('renders the logo image', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        expect(screen.getByAltText('lrnr logo')).toBeInTheDocument()
    })
    it('renders the LRNR logo image', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const img = screen.getByAltText(/lrnr logo/i)
        expect(img).toBeInTheDocument()
        expect(img).toHaveAttribute('src', '/lrnr.png')
    })
})