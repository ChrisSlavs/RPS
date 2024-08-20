import os
import re

ROUTES_REGEX = r"//routes$\s*"
ROUTES_PATTERN = re.compile(ROUTES_REGEX, re.IGNORECASE)

def generate_route_imports(routes_dir, output_file):
    route_files = [f for f in os.listdir(routes_dir) if f.endswith('.js')]

    statements = []
    for file in route_files:
            route_name = os.path.splitext(file)[0]
            name_lower = route_name[0].lower() + route_name[1:]
            var_name = f"{name_lower}Router"
            require_statement = f"const {var_name} = require('./routes/{route_name}');"
            use_statemenet = f"app.use(./{name_lower});"

            statements.append([require_statement, use_statemenet])
    

    data = ""
    routes_start = 1
    with open(output_file) as f:
        data = f.readlines()
        for line in data:
            if re.search(ROUTES_PATTERN, line) != None:
                 break
        routes_start += 1


    for i, text in enumerate(statements):
        data.insert(routes_start + i, text)


    with open(output_file, 'w') as f:
        for statement in data:
            

    return

# # Usage
routes_directory = './routes'  # Adjust this to your project's route directory
main_file = './index.js'  # Adjust this to your main Express.js file

generate_route_imports(routes_directory, main_file)