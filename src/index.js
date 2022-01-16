import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloMessage extends React.Component {
    squatVal;

    onChangeValue = () => {
        this.squatVal = document.getElementById('squat').value;
        document.getElementById('frontsquat').value = this.squatVal * 0.85;
        document.getElementById('deadlift').value = this.squatVal * 1.2;
        document.getElementById('benchpress').value = this.squatVal * 0.75;
        document.getElementById('militarypress').value = this.squatVal * 0.45;
        document.getElementById('pullups').value = this.squatVal * 0.675;
        document.getElementById('dips').value = this.squatVal * 0.7875;
    }


    render() {
        return (
            <div>
                <div>
                    <label htmlFor='squat'>Przysiad: </label>
                    <input onChange={this.onChangeValue} type="number" id='squat' placeholder='kg' />
                </div>
                <div>
                    <label htmlFor='frontsquat'>Przysiad - front: </label>
                    <input type="number" id='frontsquat' placeholder='kg' />
                </div>
                <div>
                    <label htmlFor='benchpress'>Wyciskanie sztangi leżąc: </label>
                    <input type="number" id='benchpress' placeholder='kg' />
                </div>
                <div>
                    <label htmlFor='militarypress'>Wyciskanie sztangi stojąc: </label>
                    <input type="number" id='militarypress' placeholder='kg' />
                </div>
                <div>
                    <label htmlFor='pullups'>Podciąganie na drążku podchwytem: </label>
                    <input type="number" id='pullups' placeholder='kg' />
                </div>
                <div>
                    <label htmlFor='dips'>Pompki na poręczach: </label>
                    <input type="number" id='dips' placeholder='kg' />
                </div>
                <div>
                    <label htmlFor='deadlift'>Martwy ciąg: </label>
                    <input type="number" id='deadlift' placeholder='kg' />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloMessage name='dupa'/>,
    document.getElementById('root')
);
