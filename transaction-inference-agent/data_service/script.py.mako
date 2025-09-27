from mako.template import Template
from alembic.script import ScriptDirectory
from alembic.runtime.environment import EnvironmentContext
from alembic.util import compat
from alembic import command, util

def run(config, **kwargs):
    template = Template(filename=config.get_template_filename('script.py.mako'))
    script = ScriptDirectory.from_config(config)
    env = EnvironmentContext(
        config,
        script,
        **kwargs
    )

    def render_cmd(name, **kw):
        return template.render(
            up_revision=env.get_revision(),
            down_revision='base',
            **kw
        )
    
    command.revision(config, **kwargs)
    command.upgrade(config, "head")


def list_templates(config):
    print("Available templates:")
    for temp in sorted(os.listdir(config.get_template_path())):
        if not temp.startswith('.'):
            print(temp)