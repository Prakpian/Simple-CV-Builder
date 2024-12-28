import Button from "./Button"

export default function LanguageDetail({languageList,languageUpdate,addLanguage,deleteLanguage}) {
    return (
        <section>
            <h1 className="section-title">Language</h1>
            <div className="box">
                {languageList.map((e,i) => {
                    return (
                        <div className="list" key={i}>
                        <input type="text" value={e.text} className="sm-input" onChange={e => languageUpdate(e,i)}/>
                            <div>
                                <Button text="+" className="small-button" onClick={() => addLanguage()}/>
                                <Button text='Delete'className='small-button' onClick={() => deleteLanguage(i)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}