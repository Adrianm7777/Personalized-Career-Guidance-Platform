import pandas as pd
from sklearn.neighbors import NearestNeighbors

data = pd.DataFrame({
    "career": ["Data Scientist", "Software Developer", "Product Manager", "Marketing Specialist"],
    "skills": ["Python, Machine Learning", "JavaScript, React", "Leadership, Strategy", "SEO, Content Marketing"]
})

data['skill_vector'] = data['skills'].apply(lambda x: len(x.split(',')))

model = NearestNeighbors(n_neighbors=1)
model.fit(data[['skill_vector']])

def recommend_career(input_skills: str):
   
    input_vector = len(input_skills.split(','))
    distances, indices = model.kneighbors([[input_vector]])
    recommended_career = data.iloc[indices[0][0]]['career']
    return recommended_career
