import Button from "./Button";

export default function SkillDetail({skillList,skillUpdate,addSkill,deleteSkill}) {
    return (
        <section>
            <h1 className="section-title">Skill</h1>
            <div className="box">
                {skillList.map((e,i) => {
                    return (
                        <div className="list" key={i}>
                        <input type="text" value={e.text} className="sm-input" onChange={e => skillUpdate(e,i)}/>
                            <div>
                                <Button text="+" className="small-button" onClick={() => addSkill()}/>
                                <Button text='Delete'className='small-button' onClick={() => deleteSkill(i)}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}