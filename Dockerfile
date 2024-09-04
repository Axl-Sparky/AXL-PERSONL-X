FROM quay.io/eypzgod/izumi:latest
RUN git clone https://github.com/A-J-S-A-L-S-P-A-R-K-Y/AXL-PERSONL-X /root/bot/
WORKDIR /root/bot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]
