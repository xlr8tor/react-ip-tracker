import { useState } from "react";

import { Wrapper, Content, Button } from "./SearchBar.styles";



const SearchBar = ({onSubmit}) => {
    const [inputText, setInputText] = useState("");

    return (
        <Wrapper>
            <Content>
                <input 
                    type="text"
                    placeholder="Enter IP Address"
                    value = {inputText}
                    onChange = {(e) => {
                        setInputText(e.target.value)
                    }}
                />
                <Button 
                    onClick = {() => {
                        //submit search term
                        onSubmit(inputText)
                    }}></Button>
            </Content>
        </Wrapper>
    )
}

export default SearchBar;