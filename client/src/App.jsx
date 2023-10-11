import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PokeDetail from "./components/PokeDetail";
import PokeSuperDetail from "./components/PokeSuperDetail";
import GameScreen from "./components/GameScreen";
import ScoreBoard from "./components/ScoreBoard";
import Select from "./components/Select";
import "./App.css";
import { useRef, useState } from "react";
/* import ScoreBoard from "./components/ScoreBoard"; */



function App() {
	const [userSelection, setUserSelection] = useState();

	return (
		<>
			{/* <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <Link to={"/pokemon/:id"}>Pokemon Detail</Link>
            <Link to={"/pokemon/:id/:info"}>Pokemon Super Detail</Link>
            <Link to={"/game"}>Game Screen</Link>
          </li>
        </ul>
      </nav> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pokemon/:id" element={<PokeDetail />} />
				<Route path="/pokemon/:id/:info" element={<PokeSuperDetail />} />
				<Route
					path="/game"
					element={<GameScreen pokemonA1={userSelection} />}
				/>
				<Route path="/select" element={<Select selection={userSelection} setUserSelection={setUserSelection} />} />
				<Route path="/highscore" element={<ScoreBoard />} />
			</Routes>
		</>
	);
}

export default App;
