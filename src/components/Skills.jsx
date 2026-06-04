function Skills() {
    return <>
        <h3 className='text-lg font-bold mb-2'>My Skills</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
            <section className="p-4 bg-neutral-900 border-2 border-neutral-950 rounded-2xl align-middle">
                <p className="font-bold">Front-end</p>
                <ul className="ml-6 list-[square]">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Vue.js</li>
                    <li>AngularJS</li>
                </ul>
            </section>
            <section className="p-4 bg-neutral-900 border-2 border-neutral-950 rounded-2xl align-middle">
                <p className="font-bold">Back-end</p>
                <ul className="ml-6 list-[square]">
                    <li>PHP [Laravel, CodeIgniter, Magento]</li>
                    <li>Node.js [Express]</li>
                    <li>APIs REST</li>
                    <li>SQL [MySQL, Oracle, PostgreSQL]</li>
                </ul>
            </section>
            <section className="p-4 bg-neutral-900 border-2 border-neutral-950 rounded-2xl align-middle">
                <p className="font-bold">Tools and Methodologies</p>
                <ul className="ml-6 list-[square]">
                    <li>Git</li>
                    <li>Agile/Kanban</li>
                    <li>Postman</li>
                    <li>Visual Studio Code</li>
                </ul>
            </section>
        </div>
    </>;
}

export default Skills;