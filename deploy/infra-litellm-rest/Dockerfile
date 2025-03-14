# source version
ARG version
# env, dev, test, prod
ARG env
# harbor host
ARG harbor
ARG service

FROM hub.p1.cn/cicd/lingualink_base:v1

COPY requirements.txt /
RUN python3 -m pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt
RUN apt-get update && apt-get install -y git
RUN git config --global http.proxy http://10.10.1.81:2345
RUN git config --global https.proxy http://10.10.1.81:2345

COPY litellm /app/${service}
COPY deploy/test/entrypoint.sh /
RUN chmod +x /entrypoint.sh

WORKDIR /app/${service}
ENTRYPOINT /bin/sh -c /entrypoint.sh